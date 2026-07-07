import { useState } from 'react';

export default function usePasswordProtection() {
  const [isPromptOpen, setIsPromptOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);

  const handleProtectedAction = (action) => {
    const unlockedDate = localStorage.getItem("appUnlockedDate");
    const todayDate = new Date().toDateString();
    const isUnlocked = unlockedDate === todayDate;
    if (isUnlocked) {
      action();
    } else {
      setPendingAction(() => action);
      setIsPromptOpen(true);
    }
  };

  const closePrompt = () => {
    setIsPromptOpen(false);
    setPendingAction(null);
  };

  const handleSuccess = () => {
    if (pendingAction) {
      pendingAction();
    }
  };

  return {
    isPromptOpen,
    handleProtectedAction,
    closePrompt,
    handleSuccess
  };
}
