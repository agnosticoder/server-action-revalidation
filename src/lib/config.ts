export const { NODE_ENV = 'develoment', PASSWORD = 'secret', NAME = 'server-action-revalidation' } = process.env;
export const IN_PROD = NODE_ENV === 'production';