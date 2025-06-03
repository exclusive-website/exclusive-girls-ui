const Checkbox = ({
    label,
    checked,
    onChange,
    }: {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    }) => {
    return (
        <label className="flex items-center space-x-2">
        <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded"
        />
        <span className="text-sm text-gray-700">{label}</span>
        </label>
    );
    }

export default Checkbox;