
const AccountInfo = ({ accInfo }) => {
    return (
        <div className={"w-72 h-52 flex flex-col rounded-xl bg-[#3D7AE5]/10 text-white"}>
            <div className={"flex py-6 justify-center font-bold text-2xl"}>
                Account Number
            </div>
            <div className={"flex py-1 justify-center text-2xl"}>
                {accInfo}
            </div>

        </div>
    );
};

export default AccountInfo;
