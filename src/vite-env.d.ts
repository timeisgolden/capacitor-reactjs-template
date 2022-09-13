/// <reference types="vite/client" />
interface ImportMetaEnv extends Readonly<Record<string, string | boolean | undefined>> {
  readonly HERPLAN_FIREBASE_APIKEY: string;
  readonly HERPLAN_FIREBASE_AUTHDOMAIN: string;
  readonly HERPLAN_FIREBASE_PROJECTID: string;
  readonly HERPLAN_FIREBASE_STORAGE_BUCKET: string;
  readonly HERPLAN_FIREBASE_MESSAGING_SENDERID: string;
  readonly HERPLAN_FIREBASE_APPID: string;
  readonly HERPLAN_FIREBASE_MESAUREMENTID: string;
  // more env variables...
}

// eslint-disable-next-line no-unused-vars
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
