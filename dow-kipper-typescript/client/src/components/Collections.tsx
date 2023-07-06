import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  addCollection,
  deleteCollectionById,
  getCollectionByCollectionId,
  updateCollection,
} from "../services/CollectionsApi";
import { CollectionInterface } from "../models/models";

AOS.init();

const Collections: React.FC = () => {
  const [collections, setCollections] = useState<CollectionInterface[]>([]);
  const [editedCollection, setEditedCollection] =
    useState<CollectionInterface | null>(null);


  const handleCreateCollection = async () => {
    const newCollection: CollectionInterface = {
      id: 0,
      name: "New Collection",
      value: null,
    };

    try {
      const createdCollection = await addCollection(newCollection);
      console.log("Created Collection:", createdCollection);
    } catch (error) {
      console.error("Failed to create collection:", error);
    }
  };

  const handleEditCollection = async (collectionId: number) => {
    try {
      const collection = await getCollectionByCollectionId(collectionId);
      setEditedCollection(collection);
    } catch (error) {
      console.error("Failed to fetch collection:", error);
    }
  };


  const handleDeleteCollection = async (collectionId: number) => {
    try {
      await deleteCollectionById(collectionId);
      console.log("Collection deleted successfully");
    } catch (error) {
      console.error("Failed to delete collection:", error);
    }
  };



  return (
    <div>
      <div className="main-collections">
        <h1 className="ml-3 mt-8 text-4xl font-bold">View Your Collections</h1>
        <div
          className="collections-container grid grid-cols-3 gap-4 mt-4"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="card p-4 flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h2 className="mb-4 text-lg font-bold text-indigo-700">
                {collection.name}
              </h2>
              ```tsx
              <button
                onClick={() => handleEditCollection(collection.id)}
                className="px-4 py-2 mt-2 bg-blue-500 text-white rounded-md"
              >
                Edit Collection
              </button>
              <button
                onClick={() => handleDeleteCollection(collection.id)}
                className="px-4 py-2 mt-2 bg-red-500 text-white rounded-md"
              >
                Delete Collection
              </button>
            </div>
          ))}
          <div className="card p-4 flex flex-col items-center">
            <h2 className="mb-4 text-lg font-bold text-indigo-700">
              Yugioh Collection
            </h2>
            <img
              className="object-cover h-80 w-full"
              src="https://images.unsplash.com/photo-1620336655174-32ccc95d0e2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem dolorem dolor voluptatum earum. Impedit doloribus natus
              commodi accusamus magni, nam explicabo numquam aperiam unde
              tenetur doloremque ipsum illum est? Obcaecati?
            </p>
          </div>
          <div
            className="card p-4 flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <h2 className="mb-4 text-lg font-bold text-indigo-700">
              Baseball Collection
            </h2>
            <img
              className="object-cover h-80 w-full"
              src="https://images.unsplash.com/photo-1609200660087-e23d23d7e958?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFzZWJhbGwlMjBjYXJkc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              totam ut vel illum incidunt. Assumenda corporis et officiis
              dolores dolore quas nulla est. In, delectus. Possimus qui totam
              aliquid quasi.
            </p>
          </div>
          <div
            className="card p-4 flex flex-col items-center"
            data-aos="fade-left"
            data-aos-delay="800"
          >
            <h2 className="mb-4 text-lg font-bold text-indigo-700">
              Pokemon Collection
            </h2>
            <img
              className="object-cover h-80 w-full"
              src="https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              sit? Nihil repellendus maxime ad non temporibus, dolores aliquam?
              Quasi eaque tenetur voluptas alias dignissimos reiciendis omnis
              iusto odio? Quia, ratione
            </p>
          </div>
          <button
            onClick={handleCreateCollection}
            className="mt-4 ml-4 px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Add Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
