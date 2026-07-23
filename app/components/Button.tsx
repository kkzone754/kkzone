type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "px-6 py-3 rounded-full font-semibold transition duration-300";

  const styles = {
    primary:
      "bg-yellow-400 text-black hover:bg-yellow-300 hover:scale-105",
    secondary:
      "border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}