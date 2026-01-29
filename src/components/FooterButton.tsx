type Props = {
  disabled: boolean;
  label: string;
  onClick: () => void;
};

export function FooterButton({ disabled, label, onClick }: Props) {
  return (
    <footer className="bottombar">
      <button className={`close-order ${disabled ? "" : "enabled"}`} disabled={disabled} onClick={onClick}>
        {label}
      </button>
    </footer>
  );
}
