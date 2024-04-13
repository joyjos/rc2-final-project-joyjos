import ScrollToTop from "react-scroll-to-top";

export const CookiesPage = () => {
  return (
    <>
      <main className="ae-container-fluid ae-container-fluid--inner rk-main legal animated fadeIn">
        <div className="justify">
          <h2 className="ae-u-bolder">Política de Cookies</h2>
          <p className="au-mb-3">
            Este sitio web usa Cookies para mejorar y optimizar la experiencia
            del usuario. A continuación encontrarás información detallada sobre
            qué son las "Cookies", qué tipología utiliza este sitio web, cómo
            puedes desactivarlas en tu navegador y cómo bloquear específicamente
            la instalación de Cookies de terceros.
          </p>
          <h3>1.- Qué son las Cookies</h3>
          <p className="au-mb-3">
            Las Cookies son archivos que el sitio web o la aplicación que
            utilizas instala en tu navegador o en tu dispositivo (Smartphone,
            tableta o televisión conectada) durante tu recorrido por las páginas
            o por la aplicación, y sirven para almacenar información sobre tu
            visita.
          </p>
          <h3>2.- Qué tipos de Cookies utiliza esta Web</h3>
          <h4 className="cookies">Cookie Consent</h4>
          <p className="au-mb-3">
            Esta cookie se utiliza para recordar si ha dado su consentimiento
            para el uso de cookies en este sitio web. Cuando da su
            consentimiento, se establece una cookie que evita que aparezca la
            barra de notificación de cookies en la parte inferior de la ventana
            del navegador.
          </p>
          <h4 className="cookies">Cookies de Sesión</h4>
          <p className="au-mb-3">
            Son aquellas que se generan una vez el usuario accede a la web y que
            expiran o se eliminan cuando el usuario cierra el navegador.
          </p>
          <h4 className="cookies">Cookies Permanentes</h4>
          <p className="au-mb-3">
            Son las que permanecen en el ordenador del usuario aunque este
            cierre el navegador. Solo se eliminan cuando expira su tiempo de
            permanencia (que suele ser muy largo), cuando cumplen su función, o
            cuando se borran manualmente.
          </p>
          <h4 className="cookies">Cookies de Análisis</h4>
          <p className="au-mb-3">
            Este tipo de cookies, normalmente se generan a través de un
            proveedor externo (como pueden ser Google Analytics, Comscore,
            Netscope, etc.) y básicamente su finalidad es identificar al usuario
            de forma anónima para poder analizar pautas de comportamiento de los
            usuarios mientras navegan por la web.
          </p>
          <p className="au-mb-3">
            IMPORTANTE: estas cookies nunca irán asociadas a datos de tipo
            personal que pueda identificar al usuario y se emplearán únicamente
            con el objetivo de recabar datos estadísticos que permitan mejorar
            la experiencia de los usuarios en el sitio.
          </p>
          <h3>3.- Cómo desactivar nuestras Cookies</h3>
          <p>
            Usando las opciones de configuración de tu navegador web, podrás
            permitir, bloquear o eliminar las cookies instaladas en tu equipo:
          </p>
          <ul className="au-mb-3">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647?hl=es"
                alt="Google Chrome"
                target="_blank"
                className="browser"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we"
                alt="Mozilla Firefox"
                target="_blank"
                className="browser"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/es-es/topic/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
                alt="Microsoft Edge"
                target="_blank"
                className="browser"
              >
                Microsoft Edge
              </a>
            </li>
            <li>
              <a
                href="http://help.opera.com/Windows/11.50/es-ES/cookies.html"
                alt="Opera"
                target="_blank"
                className="browser"
              >
                Opera
              </a>
            </li>
            <li>
              <a
                href="http://support.apple.com/kb/ph5042"
                alt="Safari"
                target="_blank"
                className="browser"
              >
                Safari
              </a>
            </li>
          </ul>
          <h3>4.- Qué ocurre si se deshabilitan las Cookies</h3>
          <p className="au-mb-3">
            Navegar sin cookies es perfectamente posible, pero la experiencia de
            usuario puede no ser óptima y algunas utilidades pueden no
            funcionar.
          </p>
          <h3>5.- Actualizaciones y cambios en la Política de Cookies</h3>
          <p className="au-mb-3">
            <span className="azul">JOYSWEETS</span> puede modificar esta
            Política de Cookies en función de exigencias legislativas,
            reglamentarias, o con la finalidad de adaptar dicha política a las
            instrucciones dictadas por la Agencia Española de Protección de
            Datos, por ello se aconseja a los Usuarios que la visiten
            periódicamente.
          </p>
        </div>
      </main>
      <ScrollToTop smooth />
    </>
  );
};
