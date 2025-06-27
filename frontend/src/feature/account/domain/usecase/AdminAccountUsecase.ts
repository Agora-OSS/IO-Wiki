import { AdminAccountRepository } from "@/feature/account/data/repository";

class AdminAccountUsecase {
  async initializeAdminAccount(email: string): Promise<void> {
    await AdminAccountRepository.initializeAdminAccount(email);
  }

  async approveMember(email: string): Promise<void> {
    await AdminAccountRepository.approveMember(email);
  }

  async rejectMember(email: string): Promise<void> {
    await AdminAccountRepository.rejectMember(email);
  }
}

const adminAccountUsecase = new AdminAccountUsecase();

export { adminAccountUsecase as AdminAccountUsecase };
