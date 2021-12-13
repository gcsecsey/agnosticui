import{_ as e,c as t,o as s,d as o}from"./app.ef5c5466.js";const f='{"title":"Advanced Usage","description":"","frontmatter":{},"headers":[{"level":2,"title":"Modular CSS Imports","slug":"modular-css-imports"},{"level":3,"title":"Fine, but Which Files Are Mandatory to Import?","slug":"fine-but-which-files-are-mandatory-to-import"}],"relativePath":"docs/advanced/advanced-usage.md","lastUpdated":1639268667441}',a={},r=o(`<h1 id="advanced-usage" tabindex="-1">Advanced Usage <a class="header-anchor" href="#advanced-usage" aria-hidden="true">#</a></h1><p>This page will document some of the more advanced uses of AgnosticUI\u2026</p><h2 id="modular-css-imports" tabindex="-1">Modular CSS Imports <a class="header-anchor" href="#modular-css-imports" aria-hidden="true">#</a></h2><p>Generally, we advise that you import AgnosticUI&#39;s <code>common.min.css</code> for ease of use. However, you may wish to import only certain global CSS files in a more modular way. For example, if you wish to import the reset and custom properties, but not the utilities, you could import just those files:</p><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token string">&quot;agnostic-css/dist/common.properties.min.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;agnostic-css/dist/common.reset.min.css&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// NOTE no import &quot;agnostic-css/dist/common.utilities.min.css&quot;;</span>
</code></pre></div><h3 id="fine-but-which-files-are-mandatory-to-import" tabindex="-1">Fine, but Which Files Are Mandatory to Import? <a class="header-anchor" href="#fine-but-which-files-are-mandatory-to-import" aria-hidden="true">#</a></h3><p>Since the AgnosticUI components rely on the CSS custom properties to defined, the <code>common.properties.min.css</code> import is required.</p><div class="mbe24"></div><p>If you are already using a standard <code>reset.css</code> (<a href="https://meyerweb.com/eric/tools/css/reset/" target="_blank" rel="noopener noreferrer">Eric Meyer&#39;s reset.css</a>, <a href="https://necolas.github.io/normalize.css/" target="_blank" rel="noopener noreferrer">normalize.css</a>, or similar), it \u201Cshould be fine\u201D, but we leave it to you to test and/or compare the resets to ours.</p><div class="mbe24"></div><p>The CSS utilities are definitely <u>not</u> a requirement unless you want to use them (e.g. <code>mbe16</code>, <code>flex items-center justify-center</code>, <code>text-uppercase</code>, and so on). So, it&#39;s a performance win to use the modular approach described above if you don&#39;t plan to leverage those in the first place.</p>`,11),n=[r];function i(c,d,p,l,m,u){return s(),t("div",null,n)}var _=e(a,[["render",i]]);export{f as __pageData,_ as default};