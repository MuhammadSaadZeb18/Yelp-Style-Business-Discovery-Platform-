import React, { useState } from "react";
import useCollectionModalStore from "../../store/useCollectionModalStore";
const CollectionModal = () => {
  const { closeModal } = useCollectionModalStore();
  const [createCollection, setCreateCollection] = useState(false);
  const [collectionName, setCollectionName] = useState("");

  const content = (
    <>
      <div className="h-[1px] w-full  bg-gray-200 my-3"></div>
      <div className="lg:col-span-2">
        <input
          value={collectionName}
          onChange={(e) => setCollectionName(e.target.value)}
          placeholder="Collection Name ...."
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none"
        />
      </div>
      <div className="flex justify-between my-[1rem] gap-2">
        <button
          disabled={!collectionName.trim()}
          className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg transition-colors
             hover:bg-indigo-700
             disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Create & add
        </button>

        <div
          onClick={() => {
            setCreateCollection(false);
            setCollectionName("");
          }}
          class="cursor-pointer flex justify-center  w-[30%] items-center gap-2 px-4 py-2 bg-gray-100 text-black rounded-lg hover:bg-gray-200 transition-colors"
        >
          <button className="cursor-pointer">cancel</button>
        </div>
      </div>
    </>
  );

  const content2 = (
    <>
      <div class="text-center py-8 flex flex-col justify-center items-center">
        {/* <button className="cursor-pointer"> */}
        <p class="text-gray-600 mb-4">No collections yet</p>
        {/* </button> */}
        <button
          onClick={() => setCreateCollection(true)}
          class="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-plus w-4 h-4"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
          Create Your First Collection
        </button>
      </div>
    </>
  );
  // const content3 = (
  //   <>
  //     <div
  //       disabled
  //       className="rounded-lg flex disabled:opacity-50 disabled:cursor-not-allowed justify-between items-center my-[1rem] border-gray-200 hover:bg-blue-50 border p-[1rem]"
  //     >
  //       <h6>Collection</h6>
  //       <span>1item</span>
  //     </div>
  //     <button
  //       onClick={() => setCreateCollection(true)}
  //       class="cursor-pointer w-full items-center gap-2 font-semibold hover:bg-blue-50 px-4 py-2 text-black border-[3px] border-gray-200 border-dotted rounded-lg"
  //     >
  //       New Collection
  //     </button>
  //   </>
  // );
  return (
    <div class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-xl max-w-md w-full p-6 ">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-semibold">Add to Collection</h3>
          <button
            onClick={closeModal}
            class="text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-x w-5 h-5"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        {createCollection ? content : content2}
        {/* {content3} */}
      </div>
    </div>
  );
};

export default CollectionModal;
