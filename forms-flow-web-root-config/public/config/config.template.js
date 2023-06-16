window["_env_"] = {
/*  //TODO Remove the MF variables from config.js Not being used anywhere as these are build time variable
  MF_FORMSFLOW_WEB_URL: "${MF_FORMSFLOW_WEB_URL}",
  MF_FORMSFLOW_NAV_URL: "${MF_FORMSFLOW_NAV_URL}",
  MF_FORMSFLOW_SERVICE_URL: "${MF_FORMSFLOW_SERVICE_URL}",
  MF_FORMSFLOW_ADMIN_URL: "${MF_FORMSFLOW_ADMIN_URL}",
  MF_FORMSFLOW_THEME_URL: "${MF_FORMSFLOW_THEME_URL}",*/
  // To define project level configuration  possible values development,test, production
  NODE_ENV: "${NODE_ENV}",
  //Environment Variables for forms-flow-web

  /*URL of forms-flow-forms
   Form-IO API-URL*/
  REACT_APP_API_SERVER_URL: "${REACT_APP_API_SERVER_URL}",
  // Form-IO API-PROJECT-URL
  REACT_APP_API_PROJECT_URL: "${REACT_APP_API_PROJECT_URL}",
  // Keycloak-client-name for web
  REACT_APP_KEYCLOAK_CLIENT: "${REACT_APP_KEYCLOAK_CLIENT}",
  // Keycloak-Realm-name
  REACT_APP_KEYCLOAK_URL_REALM: "${REACT_APP_KEYCLOAK_URL_REALM}",
  // Keycloak URL
  REACT_APP_KEYCLOAK_URL: "${REACT_APP_KEYCLOAK_URL}",

  ////Environment Variables for forms-flow-bpm////

  //Insight Api End point
  //REACT_APP_INSIGHT_API_BASE: "Insight Api base end-point",
  //REACT_APP_INSIGHTS_API_KEY: "<API_KEY from REDASH>",
  //web Api End point
  REACT_APP_WEB_BASE_URL: "${REACT_APP_WEB_BASE_URL}",
  //bpm base api
  REACT_APP_BPM_URL: "${REACT_APP_BPM_URL}",
  REACT_APP_WEBSOCKET_ENCRYPT_KEY: "${REACT_APP_WEBSOCKET_ENCRYPT_KEY}",
  //application name
  REACT_APP_APPLICATION_NAME: "${REACT_APP_APPLICATION_NAME}",
  //custom url
  REACT_APP_WEB_BASE_CUSTOM_URL: "${REACT_APP_WEB_BASE_CUSTOM_URL}",
  REACT_APP_CUSTOM_SUBMISSION_URL: "${REACT_APP_CUSTOM_SUBMISSION_URL}",
  REACT_APP_CUSTOM_SUBMISSION_ENABLED: "${REACT_APP_CUSTOM_SUBMISSION_ENABLED}",
  REACT_APP_USER_ACCESS_PERMISSIONS: {
    accessAllowApplications: false,
    accessAllowSubmissions: false,
  },
  REACT_APP_MULTI_TENANCY_ENABLED: "${REACT_APP_MULTI_TENANCY_ENABLED}",
  REACT_APP_DRAFT_ENABLED: "${REACT_APP_DRAFT_ENABLED}",
  REACT_APP_DRAFT_POLLING_RATE: "${REACT_APP_DRAFT_POLLING_RATE}",
  REACT_APP_EXPORT_PDF_ENABLED: "${REACT_APP_EXPORT_PDF_ENABLED}",
  REACT_APP_PUBLIC_WORKFLOW_ENABLED: "${REACT_APP_PUBLIC_WORKFLOW_ENABLED}",
  REACT_APP_DOCUMENT_SERVICE_URL: "${REACT_APP_DOCUMENT_SERVICE_URL}",
  REACT_APP_OPENTELEMETRY_SERVICE: "${REACT_APP_OPENTELEMETRY_SERVICE}",
  CUSTOM_THEME_URL: "${CUSTOM_THEME_URL}",
  REACT_APP_MT_ADMIN_BASE_URL: "${REACT_APP_MT_ADMIN_BASE_URL}",
  REACT_APP_KEYCLOAK_ENABLE_CLIENT_AUTH: "${KEYCLOAK_ENABLE_CLIENT_AUTH}",
  ENABLE_FORMS_MODULE: "${ENABLE_FORMS_MODULE}",
  ENABLE_TASKS_MODULE: "${ENABLE_TASKS_MODULE}",
  ENABLE_DASHBOARDS_MODULE: "${ENABLE_DASHBOARDS_MODULE}",
  ENABLE_PROCESSES_MODULE: "${ENABLE_PROCESSES_MODULE}",
  ENABLE_APPLICATIONS_MODULE: "${ENABLE_APPLICATIONS_MODULE}",
};
