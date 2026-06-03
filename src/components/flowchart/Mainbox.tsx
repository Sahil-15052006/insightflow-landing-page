export default function Mainbox({prop} : {prop :string}) {
    return (
        <div className="h-fit w-37.5 border-2 border-(--primary) p-3 rounded bg-(--primary)/30 text-center text-(--primary) font-orbitron font-semibold shadow-[0_0_20px_0_var(--primary)] text-xs ">
            {prop}
        </div>
    )
}
