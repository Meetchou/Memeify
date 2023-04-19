import React, { ChangeEvent } from "react";
import FormLayout from "../../templates/formLayout";
import Input from "../../atoms/input/input";

interface IProps {
  topText: string;
  bottomText: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Form: React.FC<IProps> = ({ topText, bottomText, onChange }) => {
  return (
    <FormLayout>
      <Input
        placeholder="Top text"
        name="topText"
        value={topText}
        onChange={onChange}
      />
      <Input
        placeholder="Bottom text"
        name="bottomText"
        value={bottomText}
        onChange={onChange}
      />
    </FormLayout>
  );
};

export default Form;
