import { useContext } from "react";

import ContentContext from "../../context/ContentContext";

import "../../style/Content/PageHome.css"

import One from "../../Image/Pictures/One.jpg"
import Two from "../../Image/Pictures/Two.jpg"
import Three from "../../Image/Pictures/Three.jpg"
import Four from "../../Image/Pictures/Four.jpg"
import Five from "../../Image/Pictures/Five.jpg"
import Six from "../../Image/Pictures/Six.jpg"
import Seven from "../../Image/Pictures/Seven.jpg"
import Eight from "../../Image/Pictures/Eight.jpg"
import Nine from "../../Image/Pictures/Nine.jpg"
import Ten from "../../Image/Pictures/Ten.jpg"
import Eleven from "../../Image/Pictures/Eleven.jpg"


export default function PageHome() {


    const { check } = useContext(ContentContext)


    const divStyleActive = {
        marginLeft: "20vw",
        transition: "all 0.75s ease",

        width: "80VW",
    }

    const divStyleInactive = {
        marginLeft: "10vw",
        transition: "all 0.75s ease",

        width: "88vw",
    }


    return (
        <div className="pageHome" style={check ? divStyleInactive : divStyleActive}>
            <div className="contentHome">

                <div className="heading" style={{ marginBottom: "5vh" }}>
                    <h1>Halısaha Nedir ?</h1>
                </div>

                <div className="one">
                    <p>Şu anda yana döne oynayacak 14. adamı aradığımız efsane bir spordur.</p>
                    <img src={One} alt="Picture One" />
                </div>

                <div className="two">
                    <img src={Two} alt="Picture Two" />
                    <p>En büyük keyfinin maçın kendisi yerine maç sonu muhabbetinin olduğu, eve dönüş vakti arabada mükemmel muhabbetlerin edildiği, her maç sonu muhabbetinde takımın taktik/ teknik açıdan zaaflarının her yönü ile analiz edilmesine rağmen ertesi hafta her şeyin en baştan bir kere daha yaşandığı bir romantik komedidir.</p>
                </div>

                <div className="three">
                    <p>Yaş kaç olursa olsun sizden önceki ekibin maçının bitmesini sahanın kapısının dibinde bekleyip, o zil çalar çalmaz koşa koşa saha dalma hissidir.</p>
                    <img src={Three} alt="Picture Three" />
                </div>

                <div className="four">
                    <img src={Four} alt="Picture Four" />
                    <p>Maç öncesi istektir/ arzudur maç sonrası ise gelen pişmanlık duygusudur.</p>
                </div>

                <div className="five">
                    <p>Hayatı futbol olan herkes için vazgeçilmez olan kutsal bir etkinliktir.</p>
                    <img src={Five} alt="Picture Five" />
                </div>

                <div className="six">
                    <img src={Six} alt="Picture Six" />
                    <p>Çoğu eril Türk birey için yaşama amacıdır. Ders, iş, vb. bir sürü sıkıntı ile dolu bir günün geride bırakıldığı ve topu karşı kaleye sokmak için verilen mücadelenin cereyan ettiği; heyecan, takım ruhu, ihtiras ve öfke gibi duygu çalkantıları ile donatılmış şiirsel bir mekandır.</p>
                </div>

                <div className="seven">
                    <p>Türkiyede halı saha; sayısı çok olan ama arandığı zaman asla bulunamayan bir olgudur. Mesela 14 kişiyi toplarsınız, maç yapmaya yeltenirsiniz ama hiç bir zaman o saha istediğiniz saatte boş olmaz. O saha bir anda bulunmaz hint kumaşı olur ve maç da yalan olur.</p>
                    <img src={Seven} alt="Picture Seven" />
                </div>

                <div className="eight">
                    <img src={Eight} alt="Picture Eight" />
                    <p>Herkesin bir gaz ile "Bir maç ayarla da oynayalım." dediği, sonrasında maç ayarlamaya çalıştığım zaman 10 kişiyi zor toparladığım ama yine de ayarlamaya çalışmaktan bıkmadığım ve bazen gerçekten acayip keyifli maçlar yaptığım yerdir.</p>
                </div>

                <div className="nine">
                    <p>Uzun zamandır hareket etmeyen bedenlerin ilk hafta mezarı, devam eden haftalarda ise sahnesi olan sosyal toplanma alanıdır.</p>
                    <img src={Nine} alt="Picture Nine" />
                </div>

                <div className="ten">
                    <img src={Ten} alt="Picture Ten" />
                    <p>Bir erkeği tanımak konusunda insana muhteşem ipuçları verebilecek aktivitedir.</p>
                </div>

                <div className="eleven">
                    <p> <u>Asla ama asla sadece HALI SAHA değildir !</u> </p>
                    <img src={Eleven} alt="Picture Eleven" />
                </div>

            </div>
        </div>
    )
}
 