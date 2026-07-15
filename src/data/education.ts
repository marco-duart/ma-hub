import { EducationDegreeEnum, type Education } from "./types";

export const education: Education[] = [
  {
    id: 1,
    institutionName: "Universidade Placeholder",
    degree: "Ciência da Computação",
    degreeLevel: EducationDegreeEnum.BACHELOR,
    startDate: new Date("2010-02-01"),
    endDate: new Date("2014-12-15"),
    description: "Formação sólida em algoritmos, sistemas distribuídos e engenharia de software.",
  },
  {
    id: 2,
    institutionName: "Escola de Negócios Placeholder",
    degree: "MBA em Gestão de Produtos Digitais",
    degreeLevel: EducationDegreeEnum.POST_GRADUATE,
    startDate: new Date("2018-03-01"),
    endDate: new Date("2019-12-01"),
    description: "Foco em discovery, métricas e estratégia de produto.",
  },
  {
    id: 3,
    institutionName: "Plataforma Online",
    degree: "Especialização em Arquitetura de Software",
    degreeLevel: EducationDegreeEnum.COURSE,
    startDate: new Date("2021-01-01"),
    endDate: new Date("2021-08-01"),
    description: "DDD, event-driven, microserviços e observabilidade.",
  },
];