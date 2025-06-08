
# Instruções para subir o site da Rifa com Bloqueio de Números Vendidos

## 1. Configurar o Google Apps Script

1. Vá para https://script.google.com/ e crie um novo projeto.
2. Cole o conteúdo de `script.gs` no projeto.
3. No Script:
   - Substitua 'ID_DA_SUA_PLANILHA' pelo ID da sua planilha do Google Sheets.
4. Vá em Deploy > Nova Implantação > Web App:
   - Executar como: Eu mesmo
   - Quem tem acesso: Qualquer pessoa
5. Copie a URL que o Deploy gerar.

## 2. Editar o index.html

- Abra o `index.html` e troque todas as ocorrências de 'URL_DO_SEU_WEB_APP' pela URL do Web App que você copiou.

## 3. Subir para a Vercel

1. Instale o Vercel CLI (caso não tenha):
   npm install -g vercel

2. No terminal, navegue até a pasta onde estão os arquivos e execute:
   vercel

3. Acompanhe as instruções e pronto! Seu site estará publicado.

Bom uso e boa sorte na sua rifa! 🎟️🚀
