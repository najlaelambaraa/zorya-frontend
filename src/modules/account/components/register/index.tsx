"use client"

import { useFormState } from "react-dom"

import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import { signUp } from "@modules/account/actions"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Picto from "@modules/common/icons/picto"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(signUp, null)

  return (
    <div className="max-w-sm flex flex-col items-center">
      <h1 className="text-large-semi uppercase mb-6">
        <Picto />
      </h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-4">
      Devenir membre de la boutique Zorya
      </p>
      <form className="w-full flex flex-col" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Nom"
            name="first_name"
            required
            autoComplete="given-name"
          />
          <Input
            label="Prenom"
            name="last_name"
            required
            autoComplete="family-name"
          />
          <Input
            label="Adresse E-mail"
            name="email"
            required
            type="email"
            autoComplete="email"
          />
          <Input label="Numero de telephone" name="phone" type="tel" autoComplete="tel" />
          <Input
            label="Mot de passe"
            name="password"
            required
            type="password"
            autoComplete="new-password"
          />
        </div>
        <ErrorMessage error={message} />
        <span className="text-center text-ui-fg-base text-small-regular mt-6">
        En créant un compte, vous acceptez la {" "}
          <LocalizedClientLink
            href="/politique-de-confidentialite"
            className="underline"
          >
            Politique de confidentialité
          </LocalizedClientLink>{" "}
          et{" "}
          <LocalizedClientLink
            href="/conditions-d-utilisation"
            className="underline"
          >
            Condition d'utilisation
          </LocalizedClientLink>
          .
        </span>
        <SubmitButton className="w-full mt-6 hover:bg-primary hover:text-black">Rejoignez Zorya</SubmitButton>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        déja membre ?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Connectez-vous
        </button>
        .
      </span>
    </div>
  )
}

export default Register
