import "./Pricing.css"
import CardBasic from "../../components/cards-pricing/card-basic/CardBasic"
import CardMedium from "../../components/cards-pricing/card-medium/CardMedium"
import CardPremium from "../../components/cards-pricing/card-premium/CardPremium"

const Pricing = () => {
    return (
        <main className="container">
            <h2 className="title-pricing">Pricing</h2>
            <div className="grid-container">
                <CardBasic />
                <CardMedium />
                <CardPremium />
            </div>
        </main>
    )
}

export default Pricing
