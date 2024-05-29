import Cards from "@modules/blog/templates/Cards";
import BrandSection from "@modules/brand/components";
import BrandTemplate from "@modules/brand/templates";
import InteractiveLink from "@modules/common/components/interactive-link";
import ValeurTemplate from "@modules/layout/templates/valeurs";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Condition de vente Zorya",
  description: "",
}

export default async function vente() {  
  return (

<div className="bg-gray-100 text-gray-800">
    <div className="max-w-7xl mx-auto p-8 bg-white shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Conditions Générales de Vente</h1>
        <p className="text-sm text-gray-500 mb-8">Dernière mise à jour : 25 mai 2024</p>

        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-6">Les présentes Conditions Générales de Vente (CGV) régissent les ventes de produits sur le site <a href="" className="text-blue-500">zorya.store</a>. En passant commande sur notre site, vous acceptez sans réserve les présentes conditions.</p>

        <h2 className="text-2xl font-semibold mb-4">2. Objet</h2>
        <p className="mb-6">Les présentes CGV ont pour objet de définir les droits et obligations des parties dans le cadre de la vente de produits proposés par Zorya sur notre site e-commerce.</p>

        <h2 className="text-2xl font-semibold mb-4">3. Produits</h2>
        <p className="mb-6">Les produits proposés à la vente sont ceux décrits sur notre site. Nous apportons le plus grand soin dans la présentation et la description de ces produits pour fournir au client les meilleures informations possibles.</p>

        <h2 className="text-2xl font-semibold mb-4">4. Votre compte</h2>
        <p className="mb-6">Lorsque vous achetez chez Zorya, vous pouvez créer un compte. Vous êtes responsable du maintien de la confidentialité de votre mot de passe et de la restriction de l'accès à votre mot de passe, et vous acceptez d'accepter la responsabilité de toutes les activités qui se produisent sous votre compte ou avec votre mot de passe.</p>

        <h2 className="text-2xl font-semibold mb-4">5. Prix</h2>
        <p className="mb-6">Les prix des produits sont indiqués en euros toutes taxes comprises (TTC) et n'incluent pas les frais de livraison. Nous nous réservons le droit de modifier les prix à tout moment, mais les produits seront facturés sur la base des tarifs en vigueur au moment de la validation de la commande.</p>

        <h2 className="text-2xl font-semibold mb-4">6. Commande</h2>
        <p className="mb-6">Pour passer commande, vous devez suivre le processus de commande en ligne et pour soumettre la commande. La vente sera considérée comme définitive après l'envoi de la confirmation de commande par e-mail et après encaissement de l'intégralité du prix.</p>

        <h2 className="text-2xl font-semibold mb-4">7. Paiement</h2>
        <p className="mb-6">Le paiement peut être effectué par carte bancaire. Le paiement est sécurisé par notre prestataire de paiement et les données bancaires ne sont pas conservées par notre société.</p>

        <h2 className="text-2xl font-semibold mb-4">8. Livraison</h2>
        <p className="mb-6">Les produits sont livrés à l'adresse de livraison indiquée lors de la commande. Nous ne sommes pas responsables des retards de livraison dus aux transporteurs.</p>

        <h2 className="text-2xl font-semibold mb-4">9. Rétractation et Retour</h2>
        <p className="mb-6">Conformément à la législation en vigueur, vous disposez d'un délai de 14 jours à compter de la réception des produits pour exercer votre droit de rétractation sans avoir à justifier de motifs ni à payer de pénalité. Les produits doivent être retournés dans leur état d'origine et complets. Les frais de retour sont à la charge du client.</p>

        <h2 className="text-2xl font-semibold mb-4">10. Données Personnelles</h2>
        <p className="mb-6">Nous collectons et utilisons vos données personnelles pour le traitement de vos commandes et l'amélioration de nos services, conformément à notre Politique de Confidentialité. Vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles.</p>

        <h2 className="text-2xl font-semibold mb-4">11. Modifications des CGV</h2>
        <p className="mb-6">Nous nous réservons le droit de modifier les présentes CGV à tout moment. Les nouvelles conditions seront applicables à toute nouvelle commande après leur mise en ligne sur le site.</p>
    </div>
</div>

        
    
  );
}