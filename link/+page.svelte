<script>
	import { Link } from '$lib/boilerplate/components'
</script>

<h1>Link</h1>

<p>URLs beginnend mit <em>http</em> werden immer im neuen Tab geöffnet.</p>

<ul>
	<li><Link to="https://klickrhein.de" /></li>
	<li><Link to="https://klickrhein.de">Klickrhein im Rheingau</Link></li>
</ul>

<code class="example"
	><pre>{`<Link to="https://klickrhein.de" />
<Link to="https://klickrhein.de">Klickrhein im Rheingau</Link>`}</pre></code>

<h2>Mit target</h2>

<p>Mittels target kann das selbst gesteuert werden.</p>

<ul>
	<li><Link to="https://klickrhein.de" target="_self">Öffnet hier</Link></li>
	<li><Link to="/button" target="_blank">Öffnet in neuem Tab</Link></li>
</ul>

<code class="example"
	><pre>{`<Link to="https://klickrhein.de" target="_self">Klickrhein öffnet hier</Link>
<Link to="/button" target="_blank">Öffnet in neuem Tab</Link>`}</pre></code>

<h2>Mit Icons</h2>

<p>Links können mit Fontello-Icons versehen werden.</p>

<ul>
	<li><Link to="https://facebook.com" fontello="facebook">Facebook</Link></li>
	<li><Link to="https://instagram.com" fontello="instagram">Instagram</Link></li>
	<li><Link to="mailto:info@example.com" fontello="mail">E-Mail senden</Link></li>
	<li><Link to="tel:+49123456789" fontello="phone">Anrufen</Link></li>
</ul>

<code class="example"
	><pre>{`<Link to="https://facebook.com" fontello="facebook">Facebook</Link>
<Link to="https://instagram.com" fontello="instagram">Instagram</Link>
<Link to="mailto:info@example.com" fontello="mail">E-Mail senden</Link>
<Link to="tel:+49123456789" fontello="phone">Anrufen</Link>`}</pre></code>

<h2>Mit aria-label</h2>

<p>Für bessere Barrierefreiheit können aria-label gesetzt werden.</p>

<ul>
	<li><Link to="/impressum" label="Zur Impressum-Seite navigieren">Impressum</Link></li>
	<li>
		<Link to="https://example.com" fontello="link" label="Externe Website besuchen">Website</Link>
	</li>
</ul>

<code class="example"
	><pre>{`<Link to="/impressum" label="Zur Impressum-Seite navigieren">Impressum</Link>
<Link to="https://example.com" fontello="link" label="Externe Website besuchen">Website</Link>`}</pre></code>
