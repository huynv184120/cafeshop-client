import addNotification from 'react-push-notification';

export const pushNotification = (title, subtitle) => {
    addNotification({
        title,
        subtitle,
        theme: 'light',
    });
};

export const NOTIFICATION_TYPE = {
    SUCCESS: 'success',
    INFO: 'info',
    WARNING: 'warning',
    ERROR: 'error'
}
