import Label from "@/Atoms/Label";
import { parseISO, format } from "date-fns";
import pt from "date-fns/locale/pt-BR";

const PublishTime = ({ data }: { data: string }) => {
  const date = parseISO(data);
  return (
    <Label
      icon="PublishTime"
      text={`Publicado em ${format(date, "dd 'de' MMMM' de 'yyyy'", {
        locale: pt,
      })}`}
    />
  );
};

export default PublishTime;
