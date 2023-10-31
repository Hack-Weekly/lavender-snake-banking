const AccountInfo = ({ accInfo }) => {
  return (
    <div className="w-72 h-52 p-4 flex flex-col rounded-xl bg-[#3D7AE5]/10 text-white">
      <div className="flex justify-center font-bold text-xl mb-4">
        Account Number
      </div>
      <div className="flex py-1 justify-center text-lg">{accInfo}</div>
    </div>
  );
};

export default AccountInfo;
