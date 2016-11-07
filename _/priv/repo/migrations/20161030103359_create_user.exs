defmodule Server.Repo.Migrations.CreateUser do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :first_name, :string
      add :last_name, :string
      add :username, :string
      add :job_title, :string
      add :email, :string
      add :encrypted_password, :string
      add :admin, :boolean 
      add :last_sign_in_at, :datetime
      timestamps()
    end

  end
end
§