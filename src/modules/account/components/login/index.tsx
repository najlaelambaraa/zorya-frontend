import { useFormState } from "react-dom"

import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import Input from "@modules/common/components/input"
import { logCustomerIn } from "@modules/account/actions"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(logCustomerIn, null)

  return (
    <div className="max-w-sm w-full flex flex-col items-center">
      <h1 className="text-large-semi uppercase mb-6">Bienvenue</h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-8">
        S'identifier pour commencer vos achats
      </p>
      <form className="w-full" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Email"
            name="email"
            type="email"
            title="Entrez une adresse mail valide."
            autoComplete="email"
            required
          />
          <Input
            label="Password"
            name="mot de passe"
            type="password"
            autoComplete="current-password"
            required
          />
        </div>
        <ErrorMessage error={message} />
        <SubmitButton className="w-full mt-6">S'identifier</SubmitButton>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        Pas un member?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="underline"
        >
          Rejoignez nous
        </button>
        .
      </span>
    </div>
  )
}

export default Login
