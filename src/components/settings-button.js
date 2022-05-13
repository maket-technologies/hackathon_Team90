import { useState } from 'react';
import { SettingsDrawer } from './settings-drawer';

export const SettingsButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <SettingsDrawer
        onClose={handleClose}
        open={open}
      />
    </>
  );
};
