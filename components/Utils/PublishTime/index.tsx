import { parseISO, format } from "date-fns";
import pt from "date-fns/locale/pt-BR";
import Label from "../../Label";

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
