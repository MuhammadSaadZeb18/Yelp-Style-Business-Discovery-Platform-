import React, { useState } from "react";
import useCollectionModalStore from "../../store/useCollectionModalStore";
import useFavStore from "../../store/useFavStore";

const CollectionModal = () => {
  const { closeModal, selectedBusiness } = useCollectionModalStore();
  const { addFavs } = useFavStore();

  const [createCollection, setCreateCollection] = useState(false);
  const [collectionName, setCollectionName] = useState("");

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <div className="flex justify-between mb-4">
          <h3 className="text-lg font-semibold">Add to Collection</h3>
          <button onClick={closeModal}>✖</button>
        </div>

        {!createCollection ? (
          <div className="text-center py-8">
            <p className="text-gray-600 mb-4">No collections yet</p>
            <button
              onClick={() => setCreateCollection(true)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
            >
              Create Your First Collection
            </button>
          </div>
        ) : (
          <>
            <input
              value={collectionName}
              onChange={(e) => setCollectionName(e.target.value)}
              placeholder="Collection Name..."
              className="w-full px-4 py-2 border rounded-lg"
            />

            <div className="flex gap-2 mt-4">
              <button
                disabled={!collectionName.trim()}
                onClick={() => {
                  addFavs({ ...selectedBusiness, collectionName });
                  closeModal();
                }}
                className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg disabled:opacity-50"
              >
                Create & Add
              </button>

              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-200 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CollectionModal;
