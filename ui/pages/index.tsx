import type { NextPage } from "next";
import DaoCard from "../components/DaoCard";

const daos = [
  {
    name: "DAO 1",
    address: "0x1234567890",
    ensName: "dao1.aragon.eth",
    description: "This is the first DAO",
  },
  {
    name: "DAO 2",
    address: "0x1234567890",
    ensName: "dao2.aragon.eth",
    description: "This is the second DAO",
  },
  {
    name: "DAO 3",
    address: "0x1234567890",
    ensName: "dao3.aragon.eth",
    description: "This is the third DAO",
  },
];

export function DaoList() {
  console.info("DAO List");

  return (
    <>
      <div className="grid xl:grid-cols-2 mt-2 gap-8">
        {daos.map((dao: any, index: number) => (
          <DaoCard
            key={index}
            name={dao.name}
            ensName={dao.ensName}
            address={dao.address}
            description={dao.description}
          />
        ))}
      </div>
    </>
  );
}

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col max-w-3xl">
        <div className="flex justify-end my-4">
          <button className="bg-green-500 hover:bg-green-600 active:scale-90 transform hover:scale-105 text-white py-2 px-4 rounded transition-all duration-200">
            New DAO
          </button>
        </div>
        <DaoList />
      </div>
    </>
  );
};

export default Home;
