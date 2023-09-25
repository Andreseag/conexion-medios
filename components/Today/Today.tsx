import { format } from "date-fns";
import es from "date-fns/locale/es";

const formatDate: string = "PPPP";

const Today = () => {
  return (
    <div className="today absolute left-0 top-2/4">
      <div className="today__container text-xs text-slate-500 capitalize">
        {format(new Date(), formatDate, { locale: es })}
      </div>
    </div>
  );
};

export default Today;
