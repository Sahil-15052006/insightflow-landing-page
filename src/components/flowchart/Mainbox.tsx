export default function Mainbox({prop} : {prop :string}) {
    return (
        <div className="h-fit w-[150px] border-2 border-[var(--primary)] p-3 rounded bg-[var(--primary)]/30 text-center text-[var(--primary)] font-orbitron font-semibold shadow-[0_0_20px_0_var(--primary)] text-xs ">
            {prop}
        </div>
    )
}
 