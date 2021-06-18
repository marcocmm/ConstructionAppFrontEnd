export function typeToTitle(type) {
  switch (type) {
    case "colaborador":
      return "Colaboradores";
    case "consumivel":
      return "Consumíveis";
    case "equipamento":
      return "Equipamentos";
    case "cliente":
      return "Clientes";
    case "material":
      return "Materiais";
    case "servico":
      return "Serviços";
    case "presenca":
      return "Presenças";
    case "fornecedor":
      return "Fornecerdor";
    default:
      return "Item";
  }
}
