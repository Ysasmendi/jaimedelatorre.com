# jaimedelatorre.com

Web personal de Jaime de la Torre. Portada, trayectoria, especialidades, blog y contacto. HTML estático generado con Eleventy y publicado en GitHub Pages.

## Publicar un artículo

En GitHub, crea un archivo dentro de `src/posts/`, por ejemplo `mi-primer-articulo.md`:

```markdown
---
title: "Título del artículo"
description: "Una frase que resume el contenido."
date: 2026-09-11
draft: false
---

Aquí empieza el artículo, escrito en Markdown.

## Un apartado

Texto, **negritas**, enlaces y listas.
```

Al guardar en `main`, GitHub Actions construye y publica la web. El artículo aparece en `/blog/mi-primer-articulo/`, en el listado del blog y entre las tres últimas entradas de la portada. `draft: true` impide generar una página pública y la excluye de listados y sitemap. Los artículos con fecha futura también se excluyen; se publican en la primera compilación posterior a su fecha (el paso del tiempo por sí solo no ejecuta una compilación).

El repositorio podría ser público: no guardes borradores confidenciales ni datos privados en Git, aunque no se publiquen en la web.

## Editar contenido

- Portada y especialidades: `src/index.njk`.
- Trayectoria: `src/_data/career.json`.
- Correo y redes: `src/_data/site.json`.
- Estilos: `src/assets/style.css`.
- Plantilla de artículos: `src/_includes/article.njk`.

## Desarrollo local

```sh
npm ci
npm run dev
```

Vista previa: http://localhost:8080. `npm run build` genera `_site/`.

## Publicación y dominio

GitHub Pages usa el workflow `.github/workflows/pages.yml`, con dominio personalizado `jaimedelatorre.com`.

Registros DNS web en Squarespace:

| Host | Tipo | Valor |
| --- | --- | --- |
| @ | A | 185.199.108.153 |
| @ | A | 185.199.109.153 |
| @ | A | 185.199.110.153 |
| @ | A | 185.199.111.153 |
| www | CNAME | ysasmendi.github.io |

El buzón `contact@jaimedelatorre.com` se configura por separado en el proveedor de correo. La web solo enlaza mediante `mailto:`.

## Tipografía y fotografía

Inter se sirve desde esta web bajo la SIL Open Font License incluida en `src/assets/fonts/LICENSE.txt`. Retrato proporcionado por Jaime de la Torre. No se usan scripts de seguimiento, cookies propias ni recursos de terceros en tiempo de ejecución.
