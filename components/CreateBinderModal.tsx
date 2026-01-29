"use client";

interface CreateBinderModalProps {
  open: boolean;
  onClose: () => void;
}

export function CreateBinderModal({ open, onClose }: CreateBinderModalProps) {
  if (!open) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      >
        <div
          className="bg-white rounded-lg shadow-xl p-6 w-100"
          onClick={(e) => e.stopPropagation()} // prevent closing on content click
        >
          <h2 className="text-lg font-semibold mb-4">Create Binder</h2>

          <input
            type="text"
            placeholder="Binder name..."
            className="w-full border rounded px-3 py-2 mb-4"
          />

          <div className="flex justify-end gap-2">
            <button onClick={onClose} className="px-3 py-2 border rounded">
              Cancel
            </button>
            <button
              onClick={onClose}
              className="px-3 py-2 rounded bg-black text-white"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

