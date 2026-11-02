#!/usr/bin/env python3
"""Gera public/img a partir das capturas reais (manuais/prints), dos ícones dos apps e das artes de divulgação.

Uso: python3 scripts/build-images.py      (precisa de Pillow com WebP; roda a partir de qualquer pasta)
As fontes ficam FORA deste repositório (../manuais, ../divulgacao, ../<app>/assets). O resultado (public/img) é versionado.
Capturas de celular: 640 px de largura; capturas de computador: 1600 px. Todas em WebP.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageChops

ROOT = Path(__file__).resolve().parents[2]            # .../production project
OUT = Path(__file__).resolve().parents[1] / "public" / "img"
PRINTS = ROOT / "manuais" / "prints"


def save(im: Image.Image, dest: Path, q: int = 78) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    im.save(dest, "WEBP", quality=q, method=6)
    print(f"  {dest.relative_to(OUT.parent)}  {im.width}x{im.height}  {dest.stat().st_size // 1024} KB")


def shot(src: Path, dest: Path, width: int, q: int = 78) -> None:
    im = Image.open(src).convert("RGB")
    im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    save(im, dest, q)


# (pasta de prints, nome da captura) -> arquivo de saída em img/<sistema>/
MOBILE = {
    "dita": {
        "login": ("dita_mobile", "00-login"), "inicio": ("dita_mobile", "01-inicio"), "conversas": ("dita_mobile", "03-conversas"),
        "humano": ("dita_mobile", "04-conversa-humano"), "bot": ("dita_mobile", "05-conversa-bot"), "pedidos": ("dita_mobile", "06-pedidos"),
        "entrega": ("dita_mobile", "07-pedido-entrega"), "parcelas": ("dita_mobile", "08-pedido-parcelas"), "novo-pedido": ("dita_mobile", "09-pedido-novo"),
        "produtos": ("dita_mobile", "10-produtos"), "revisar": ("dita_mobile", "15-produto-revisar"), "importar": ("dita_mobile", "16-produto-importar"),
        "precos": ("dita_mobile", "14-produto-precos"), "pergunta": ("dita_mobile", "12-produto-pergunta"), "clientes": ("dita_mobile", "17-clientes"),
        "cliente": ("dita_mobile", "18-cliente"), "empresa": ("dita_mobile", "21-empresa"), "recursos": ("dita_mobile", "24-empresa-recursos"),
        "vendas": ("dita_mobile", "23-empresa-vendas"), "whatsapp": ("dita_mobile", "31b-whatsapp-codigo"), "escuro": ("dita_mobile", "90-inicio-escuro"),
        "contratos": ("dita_mobile", "34-contratos"), "faq": ("dita_mobile", "35-faq"),
    },
    "mostra-ai": {
        "boas-vindas": ("mostra_mobile", "00-boas-vindas"), "inicio": ("mostra_mobile", "01-inicio"), "qr": ("mostra_mobile", "01b-inicio-rolado"),
        "produtos": ("mostra_mobile", "02-produtos"), "produto": ("mostra_mobile", "03-produto"), "categorias": ("mostra_mobile", "05-categorias"),
        "locais": ("mostra_mobile", "06-locais"), "equipe": ("mostra_mobile", "08-equipe"), "mesas": ("mostra_mobile", "10-mesas"),
        "comandas": ("mostra_mobile", "10b-comandas"), "comanda": ("mostra_mobile", "12-comanda"), "aparencia": ("mostra_mobile", "17-aparencia"),
        "assinatura": ("mostra_mobile", "19-assinatura"), "servicos-inicio": ("mostra_mobile", "30-inicio"), "agenda": ("mostra_mobile", "31-agenda"),
        "disponibilidade": ("mostra_mobile", "32-disponibilidade"), "servicos": ("mostra_mobile", "33-servicos"),
        "c-inicio": ("mostra_cliente", "01-inicio"), "c-loja": ("mostra_cliente", "02-loja"), "c-servicos": ("mostra_cliente", "03-loja-servicos"),
        "c-horarios": ("mostra_cliente", "04c-agendar-horarios"), "c-agendamentos": ("mostra_cliente", "05-agendamentos"), "c-favoritos": ("mostra_cliente", "06-favoritos"),
        "p-mesas": ("mostra_parceiro", "01-mesas"), "p-fila": ("mostra_parceiro", "02-fila"), "p-mesa": ("mostra_parceiro", "03-mesa-aberta"),
        "p-comanda": ("mostra_parceiro", "05-comanda"), "p-item": ("mostra_parceiro", "05c-adicionar-item"), "p-fechar": ("mostra_parceiro", "05d-fechar-conta"),
        "w-cardapio": ("mostra_web", "20-cardapio"), "w-mesa": ("mostra_web", "21-mesa"), "w-servicos": ("mostra_web", "22-servicos"), "w-agendar": ("mostra_web", "23-agendar"),
    },
    "rasttro": {
        "inicio": ("rasttro_mobile", "01-inicio"), "agenda": ("rasttro_mobile", "02-agenda"), "reuniao": ("rasttro_mobile", "03-reuniao"),
        "evento": ("rasttro_mobile", "04-evento"), "comboio": ("rasttro_mobile", "05-comboio"), "clube": ("rasttro_mobile", "06-clube"),
        "membro": ("rasttro_mobile", "07-membro"), "carteira": ("rasttro_mobile", "08-carteira"), "carteirinha": ("rasttro_mobile", "09-carteirinha"),
        "mensalidades": ("rasttro_mobile", "10-mensalidades"), "como-pagar": ("rasttro_mobile", "10b-como-pagar"), "mais": ("rasttro_mobile", "11-mais"),
        "perfil": ("rasttro_mobile", "12-perfil"), "motos": ("rasttro_mobile", "14-motos"), "historia": ("rasttro_mobile", "17-historia"),
        "claro": ("rasttro_mobile", "90-inicio-claro"), "gestor-checkin": ("rasttro_mobile_gestor", "03-check-in"), "gestor-comboio": ("rasttro_mobile_gestor", "04b-comboio-rolado"),
    },
    "profyla": {
        "boas-vindas": ("profyla_mobile", "00-boas-vindas"), "onboarding": ("profyla_mobile", "06-onboarding-inicio"), "importar": ("profyla_mobile", "08-importar"),
        "revisao": ("profyla_mobile", "09-revisao-experiencia"), "resumo": ("profyla_mobile", "09f-revisao-resumo"), "pronto": ("profyla_mobile", "12-onboarding-pronto"),
        "vagas": ("profyla_mobile", "20-vagas"), "detalhe": ("profyla_mobile", "21-vaga-detalhe"), "candidaturas": ("profyla_mobile", "23-candidaturas"),
        "aprovada": ("profyla_mobile", "24-candidatura-aprovada"), "entrevista": ("profyla_mobile", "26-candidatura-entrevista"), "prova": ("profyla_mobile", "29-prova"),
        "testes": ("profyla_mobile", "31-testes"), "disc": ("profyla_mobile", "32-disc-resultado"), "eneagrama": ("profyla_mobile", "33-eneagrama"),
        "notificacoes": ("profyla_mobile", "34-notificacoes"), "perfil": ("profyla_mobile", "35-perfil"), "privacidade": ("profyla_mobile", "37-privacidade"),
    },
}

DESKTOP = {
    "dita": {
        "inicio": ("dita_web", "01-inicio"), "humano": ("dita_web", "03-conversa-humano"), "bot": ("dita_web", "04-conversa-bot"), "pedidos": ("dita_web", "07-pedidos"),
        "parcelas": ("dita_web", "09-pedido-parcelas"), "produtos": ("dita_web", "11-produtos"), "perguntas": ("dita_web", "16-grupo-perguntas"),
        "cliente": ("dita_web", "06-cliente"), "recursos": ("dita_web", "21e-empresa-ia"), "comecar": ("dita_web", "25-comecar"),
        "importar": ("dita_web", "14-produtos-importar"), "faq": ("dita_web", "18-faq"),
    },
    "mostra-ai": {
        "painel": ("mostra_web", "01-painel"), "loja": ("mostra_web", "02-loja"), "produtos": ("mostra_web", "03-produtos"),
        "mesas": ("mostra_web", "07-mesas"), "agenda": ("mostra_web", "10-agenda"), "servicos": ("mostra_web", "11-painel-servicos"),
    },
    "rasttro": {
        "visao-geral": ("rasttro_web", "02-visao-geral"), "membros": ("rasttro_web", "03-membros"), "prospects": ("rasttro_web", "06-prospects"),
        "cargos": ("rasttro_web", "07-cargos"), "agenda": ("rasttro_web", "10-agenda"), "reunioes": ("rasttro_web", "11-reunioes"),
        "comboio": ("rasttro_web", "16-comboio"), "financeiro": ("rasttro_web", "17-financeiro"), "mensalidades": ("rasttro_web", "18-mensalidades"),
        "caixa": ("rasttro_web", "19-caixa"), "comunicados": ("rasttro_web", "21-comunicados"), "checkin": ("rasttro_web", "26-modo-check-in"),
        "claro": ("rasttro_web", "90-visao-geral-claro"),
    },
    "profyla": {
        "painel": ("profyla_web", "01-painel-equipe"), "candidatos": ("profyla_web", "03-candidatos"), "candidato": ("profyla_web", "04-candidato"),
        "comparar": ("profyla_web", "05-comparar"), "processos": ("profyla_web", "07-processos"), "entrevistas": ("profyla_web", "08-entrevistas"),
        "metricas": ("profyla_web", "11-metricas"), "c-inicio": ("profyla_web", "20-candidato-inicio"), "c-vagas": ("profyla_web", "21-candidato-vagas"),
        "c-testes": ("profyla_web", "22-candidato-testes"),
    },
}

# o ícone que cada app realmente usa (app.json): os `assets/images/icon.png` de alguns repos são só o modelo padrão do Expo
ICONS = {
    "dita": "dita_mobile/assets/images/icon.png", "mostra-ai": "mostra-ai-mobile/assets/icon.png",
    "mostra-ai-cliente": "mostra-ai-mobile-client/assets/icon.png", "mostra-ai-parceiro": "mostra-ai-mobile-partner/assets/icon.png",
    "rasttro": "rasttro-mobile/assets/images/rasttro-icon.png", "profyla": "profyla_mobile/assets/images/icon.png",
}
SLOGANS = {"dita": "Dita", "mostra-ai": "MostraAi", "rasttro": "Rasttro", "profyla": "Profyla"}


def og_from_slogan(src: Path, dest: Path) -> None:
    """Corta o banner de slogan em 1200x630 (proporção do cartão de compartilhamento)."""
    im = Image.open(src).convert("RGB")
    h = 630
    w = round(im.width * h / im.height)
    im = im.resize((w, h), Image.LANCZOS)
    if w < 1200:  # banner mais "quadrado": ajusta pela largura
        im = Image.open(src).convert("RGB")
        im = im.resize((1200, round(im.height * 1200 / im.width)), Image.LANCZOS)
    left, top = (im.width - 1200) // 2, (im.height - 630) // 2
    dest.parent.mkdir(parents=True, exist_ok=True)
    im.crop((left, top, left + 1200, top + 630)).save(dest, "JPEG", quality=86, optimize=True)  # JPEG: o WhatsApp e o Facebook leem melhor
    print(f"  {dest.relative_to(OUT.parent)}  1200x630  {dest.stat().st_size // 1024} KB")


def og_home() -> None:
    """Cartão de compartilhamento da página inicial (1200x630): marca, frase e os quatro ícones."""
    W, H = 1200, 630
    fd = "/usr/share/fonts/truetype/noto/NotoSansDisplay-Bold.ttf"
    fr = "/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf"
    hexc = lambda h: tuple(int(h.lstrip("#")[i:i + 2], 16) for i in (0, 2, 4))
    base = Image.new("RGB", (W, H), hexc("#070914"))

    def glow(img, color, cx, cy, rx, ry, alpha):
        g = ImageChops.invert(Image.radial_gradient("L")).resize((rx * 2, ry * 2)).point(lambda p: int((p / 255) ** 2 * 255 * alpha))
        m = Image.new("L", (W, H), 0)
        m.paste(g, (cx - rx, cy - ry))
        return Image.composite(Image.new("RGB", (W, H), hexc(color)), img, m)

    base = glow(base, "#5b4bd6", 220, 120, 520, 330, 0.55)
    base = glow(base, "#1e9fd6", 1000, 540, 460, 300, 0.45)
    base = glow(base, "#ff9f43", 1100, 60, 360, 220, 0.28)
    im = base.convert("RGBA")
    d = ImageDraw.Draw(im)
    logo = Image.open(OUT.parent / "logo.png").convert("RGBA").resize((118, 118), Image.LANCZOS)
    im.alpha_composite(logo, (70, 70))
    d.text((208, 92), "M.A. Axis", font=ImageFont.truetype(fd, 58), fill=(255, 255, 255))
    d.text((210, 160), "maaxis.tech  ·  ma-axis.com.br", font=ImageFont.truetype(fr, 24), fill=(160, 170, 200))
    f = ImageFont.truetype(fd, 92)
    for y, words in ((250, [("Mostre.", "#8f94ff"), ("Atenda.", "#3ee0c4")]), (350, [("Contrate.", "#c084f5"), ("Organize.", "#ffa94d")])):
        x = 70
        for word, color in words:
            d.text((x, y), word, font=f, fill=hexc(color))
            x += d.textlength(word + " ", font=f)
    d.text((72, 478), "Quatro sistemas para quem empreende, contrata e vive a estrada.", font=ImageFont.truetype(fr, 27), fill=(205, 212, 235))
    x = 72
    for key in ("mostra-ai", "dita", "profyla", "rasttro"):
        ic = Image.open(OUT / "icons" / f"{key}.webp").convert("RGBA").resize((78, 78), Image.LANCZOS)
        mask = Image.new("L", (78, 78), 0)
        ImageDraw.Draw(mask).rounded_rectangle((0, 0, 77, 77), 18, fill=255)
        ic.putalpha(ImageChops.multiply(ic.getchannel("A"), mask))
        im.alpha_composite(ic, (x, 522))
        x += 94
    dest = OUT / "og" / "home.jpg"
    im.convert("RGB").save(dest, "JPEG", quality=88, optimize=True)
    print(f"  img/og/home.jpg  1200x630  {dest.stat().st_size // 1024} KB")


def main() -> None:
    for system, items in MOBILE.items():
        print(f"== {system} (celular)")
        for name, (folder, file) in items.items():
            shot(PRINTS / folder / f"{file}.png", OUT / system / f"m-{name}.webp", 640)
    for system, items in DESKTOP.items():
        print(f"== {system} (computador)")
        for name, (folder, file) in items.items():
            shot(PRINTS / folder / f"{file}.png", OUT / system / f"w-{name}.webp", 1600, 80)

    print("== ícones dos apps")
    for key, repo in ICONS.items():
        im = Image.open(ROOT / repo).convert("RGBA").resize((256, 256), Image.LANCZOS)
        save(im, OUT / "icons" / f"{key}.webp", 90)

    print("== banners de slogan e imagens de compartilhamento")
    for key, name in SLOGANS.items():
        src = ROOT / "divulgacao" / "slogans" / f"{name}.png"
        im = Image.open(src).convert("RGB")
        save(im.resize((1600, round(im.height * 1600 / im.width)), Image.LANCZOS), OUT / "slogans" / f"{key}.webp", 84)
        og_from_slogan(src, OUT / "og" / f"{key}.jpg")

    og_home()

    print("== impressão 3D")
    funko = ROOT / "divulgacao" / "novidades" / "funko-pop-banner.jpg"
    save(Image.open(funko).convert("RGB"), OUT / "3d" / "funko-pop.webp", 84)
    cartaz = ROOT / "divulgacao" / "impressão-3d" / "funko-pop.jpg"
    im = Image.open(cartaz).convert("RGB")
    save(im.resize((640, round(im.height * 640 / im.width)), Image.LANCZOS), OUT / "3d" / "funko-pop-cartaz.webp", 82)


if __name__ == "__main__":
    main()
