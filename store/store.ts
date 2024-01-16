
import { create } from "zustand";

interface AppState {
  isDeleteModalOpen: boolean;
  isRenameModalOpen: boolean;  // Corrected property name
  fileId: string | null;
  setFileId: (fileId: string) => void;
  filename: string;
  setFilename: (filename: string) => void;
  setIsDeleteModalOpen: (open: boolean) => void;  // Corrected function name
  setIsRenameModalOpen: (open: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  fileId: null,
  setFileId: (fileId: string) => set((state) => ({ fileId })),
  filename: "",
  setFilename: (filename: string) => set((state) => ({ filename })),
  isDeleteModalOpen: false,
  setIsDeleteModalOpen: (open) => set((state) => ({ isDeleteModalOpen: open })),  // Corrected property name
  isRenameModalOpen: false,
  setIsRenameModalOpen: (open) => set((state) => ({ isRenameModalOpen: open })),
}));
