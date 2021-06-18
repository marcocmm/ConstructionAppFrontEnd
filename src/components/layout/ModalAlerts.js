import React, { useContext } from "react";
import ModalAlertContext from "../../context/modalAlert/modalAlertContext";

const ModalAlerts = () => {
  const alertContext = useContext(ModalAlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    ))
  );
};

export default ModalAlerts;
