export interface CpfState {
  name: string;
  status: string;
  app_account: string;
  bank_account: string;
  loading?: boolean;
  error?: string | null;
}
  