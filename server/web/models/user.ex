defmodule Server.User do
  use Server.Web, :model

  schema "users" do
    field :first_name, :string
    field :last_name, :string
    field :email, :string
    field :jobtitle, :string
    field :encrypted_password, :string
    field :admin, :boolean
    field :last_sign_in_at, :datetime

    timestamps()
  end

  @required_fields ~W(first_name last_name email)
  @optional_fields ~W(encrypted password)

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:first_name, :last_name, :email, :encrypted_password])
    |> validate_required([:first_name, :last_name, :email, :encrypted_password])
  end
end
