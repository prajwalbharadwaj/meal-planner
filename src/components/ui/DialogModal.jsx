import { Dialog } from "radix-ui";
import Button from "./Button";

// const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

const DialogModal = ({ button, title, description, children, onSave }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{button}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Close className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
          Close
        </Dialog.Close>
        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-fadeIn" />

        {/* Content */}
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[600px] bg-white rounded-lg p-6 shadow-lg focus:outline-none z-50">
          <Dialog.Title className="text-lg font-semibold">{title}</Dialog.Title>
          <Dialog.Description className="text-gray-600 mt-2">
            {description}
          </Dialog.Description>
          {children}
          <div className="mt-4 flex justify-end gap-2">
            <Dialog.Close>
              <Button type="secondary">Close</Button>
            </Dialog.Close>
            <Dialog.Close onClick={onSave}>
              <Button>Save</Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogModal;
