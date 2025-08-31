export interface User {
  user_id: number;
  stakeholder_id: number | null;
  username: string;
  nama: string;
  nrp: string;
  email: string;
  user_group_id: string;
  nama_user_group: string;
  token: {
    token: string;
    refresh_key: string;
  };
  hak_akses_modul: string;
}

export interface SessionData {
  user: User;
  hak_akses_modul: string;
}
