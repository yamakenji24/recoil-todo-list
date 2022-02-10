interface Props {
  text: string;
  isEditable: boolean;
  onChange: (newtext: string) => void;
}

export const EditableText = ({ text, isEditable, onChange }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return isEditable ? (
    <textarea defaultValue={text} onChange={handleChange} />
  ) : (
    <p>{text}</p>
  );
};
