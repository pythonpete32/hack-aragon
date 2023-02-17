interface NewDAOButtonProps {}
export const NewDAOButton: React.FC<NewDAOButtonProps> = ({}) => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <button
      className="bg-green-500 hover:bg-green-600 active:scale-90 transform hover:scale-105 text-white py-2 px-4 rounded transition-all duration-200"
      onClick={handleClick}
    >
      New DAO
    </button>
  );
};
