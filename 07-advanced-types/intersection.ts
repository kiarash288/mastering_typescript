type FileData = {
  path: string;
  content: string;
}
type DatabaseData = {
  connectionUrl: string;
  credentials: string;
}
type Status = {
  isOpen: boolean;
  errorMessage?: string;
}


type AccessedDatabaseData = DatabaseData & Status;
type AccessedFileData = FileData & Status;