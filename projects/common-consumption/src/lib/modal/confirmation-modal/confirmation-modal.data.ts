export const defaultModalContent = {
    title: 'Sample Title',
    hideCloseButton: false,
    closeButtonText: '',
    class: 'sb-modal-primary',
    contentHeading: 'This popup is intentded to take the action',
    contentDescription: 'Sample text book',
    contentMetadata: '1 item (1.5.)',
    actionButtons: [
        {
            text: 'Download',
            class: 'popover-color',
            action: 'download'
        },
        {
            text: 'Cancel',
            action: 'cancel'
        },
    ]
};

export const deleteChildUserModal = {
    hideCloseButton: false,
    closeButtonText: '',
    class: 'sb-modal-primary',
    contentDescription: 'Are you sure want to delete this User ?',
    actionButtons: [
        {
            text: 'Yes',
            class: 'popover-color',
            action: 'yes'
        },
        {
            text: 'No',
            action: 'no'
        },
    ]
  };