<template>
   <div class="footer">
      <div class="info">
         <div>
            <p>
               <span><i class="pi pi-map-marker"></i></span> Lavalle 219 .
               Planta Alta - Rafaela - Santa Fe
            </p>
            <p>
               <span><i class="pi pi-phone"></i></span>(03492) 428353 Líneas
               Rotativas
            </p>
         </div>

         <div>
            <p @click="visible = true" style="cursor: pointer">
               <span><i class="pi pi-file"></i></span> Terminos y condiciones
            </p>
            <p>
               <span><i class="pi pi-envelope"></i></span> info@medicarw.com.ar
            </p>
         </div>
      </div>
      <div style="width: 100%; display: flex; justify-content: center">
         <p>
            © 2024 Medicar Work. Todos los derechos reservados Nueva Mutual de
            Servicios NU.MU.SE.
         </p>
      </div>
      <div class="dataweb">
         <div>
            <img
               src="@/assets/DATAWEB.jpg"
               alt="dataweb"
               width="30px"
               @click="openLink"
               style="cursor: pointer"
            />
         </div>
      </div>
   </div>
   <Dialog
      v-model:visible="visible"
      modal
      header="Terminos y condiciones"
      :style="{ width: '50rem' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
   >
      <p class="mb-5">
         <b>1.Relación Jurídica</b> <br />Por medio de nuestros Términos y
         Condiciones (en adelante “Condiciones”) le informamos sobre las
         condiciones de uso del sitio web www.medicarw.com.ar (en adelante
         “Sitio web”) perteneciente a NUEVA MUTUAL DE SERVICIOS NU.MU.SE., cuyas
         condiciones respetan y están realizadas de acuerdo con la legislación
         vigente de Argentina. NUEVA MUTUAL DE SERVICIOS NU.MU.SE se reserva el
         derecho, a su exclusiva discreción, de modificar, alterar, agregar o
         eliminar partes de las Condiciones en cualquier momento. Recomendamos
         que examine estas Condiciones cada vez que visite el sitio. Su uso
         continuo de cualquier sección de este sitio tras la notificación o
         anuncio de tales modificaciones constituirá su aceptación de tales
         cambios. Estas Condiciones se modificaron por última vez el 22 de Mayo
         de 2024.
      </p>
      <p class="mb-5">
         2. Uso de Servicios <br />
         El Usuario se compromete a utilizar el Sitio Web, sus servicios y
         contenidos sin contravenir la legislación aplicable, la buena fé y el
         orden público. En consecuencia, queda prohibido todo uso con fines
         ilícitos o que perjudiquen, impidan o puedan dañar y/o sobrecargar la
         utilización y normal funcionamiento del servicio; o, de cualquier
         forma, directa o indirectamente atenten contra el sitio web o afecten
         algún derecho de terceros. De forma enunciativa pero no limitativa, el
         usuario asume los siguientes compromisos para la utilización del
         sistema: No publicarás comunicaciones comerciales no autorizadas (como
         correo no deseado, "spam") No recopilarás información o contenido de
         otros usuarios ni accederás a el Sitio Web utilizando medios
         automáticos (como harvesting bots, robots, arañas o scrapers) sin
         nuestro permiso previo. No subirás malware ni ningún tipo de código
         malintencionado al sistema. No utilizarás el Sitio Web para actos
         ilícitos, engañosos, malintencionados o discriminatorios. No realizarás
         ninguna acción que pudiera inhabilitar, sobrecargar o afectar al
         funcionamiento correcto o al aspecto del Sitio Web, como un ataque de
         denegación de servicio o la alteración de la presentación de páginas u
         otra funcionalidad del Sitio Web.
      </p>
      <p class="mb-5">
         3. Privacidad y datos personales<br />
         Nueva Mutual de Servicios (Nu.Mu.Se) – Responsable registrado en
         Registro Nacional de Base de Datos Personales, es titular del sitio
         web: www.medicarw.com.ar, y responsable de los archivos generados con
         datos personales de usuarios brindados por ellos mismos. Todos los
         datos recopilados con el uso que usted haga de la página web se
         tratarán de conformidad con la Ley de Datos Personales. La utilización
         de este sitio y/o la habilitación de un Usuario por el Titular de los
         Datos Personales importa la aceptación de la Política de
         Confidencialidad y Protección de Datos Personales. En caso de no estar
         de acuerdo con la misma, por favor, absténgase de utilizar este sitio o
         solicite la cancelación de su cuenta de usuario. El acceso a los
         vínculos de cualquier otro sitio o página no oficial, o el acceso
         mediante links, o cualquier vínculo enviado por terceros, quedará bajo
         su exclusiva responsabilidad y Nu.Mu.Se, tanto como su marca, no asumen
         responsabilidad alguna por los daños que pueda causar dicha
         vinculación. El titular podrá ejercer sobre sus datos personales los
         siguientes derechos, previo a acreditar su identidad: I. La
         rectificación, actualización, supresión, y acceso a sus datos de forma
         gratuita. II.- El retiro o bloqueo total o parcial de sus datos con
         fines publicitarios. Estos derechos podrán efectivizarse a través de
         comunicación fehaciente dirigida a: Sr. Andrés Duverne, Gerente General
         de Medicar Work. Dirección: Calle Lavalle Nº 219, Planta Alta, Rafaela,
         Provincia de Santa Fe; Cod. Postal: 2300. También pudiendo hacerlo
         mediante un correo electrónico a: datospersonales@medicarw.com.ar Nueva
         Mutual de Servicios asume que ha cumplimentado con los requisitos de
         licitud que exige la Ley 25.326. “LA AGENCIA DE ACCESO A LA INFORMACIÓN
         PÚBLICA, en su carácter de Órgano de Control de la Ley N° 25.326, tiene
         la atribución de atender las denuncias y reclamos que interpongan
         quienes resulten afectados en sus derechos por incumplimiento de las
         normas vigentes en materia de protección de datos personales.”
      </p>
      <p class="mb-5">
         4. Seguridad<br />
         La Seguridad de los Datos Personales es una prioridad para NUEVA MUTUAL
         DE SERVICIOS NU.MU.SE, es por ello el esfuerzo en mantener un nivel de
         seguridad en sus sistemas informáticos, utilizando las tecnologías
         adecuadas para lograr tal finalidad. NUEVA MUTUAL DE SERVICIOS NU.MU.SE
         ha adoptado los niveles de seguridad de protección de los datos en
         cumplimiento con la Resolución 47/2018 emitida por la Agencia de Acceso
         a la Información Pública, instalando todos los medios y medidas
         técnicas a su alcance para evitar la pérdida, mal uso, alteración,
         acceso no autorizado y robo de los datos personales facilitados. No
         obstante, el Usuario debe ser consciente de que las medidas de
         seguridad no son absolutas. Cualquier información personal que se
         suministre estará́ protegida mediante los protocolos de seguridad y la
         tecnología estándar del sector informático. En cada oportunidad en que
         el Usuario haga uso del Sitio Web, existe la posibilidad que, de manera
         automática, se obtenga y almacene información del equipo o dispositivo
         utilizado por el usuario. El usuario tiene la posibilidad de configurar
         su navegador para ser avisado de la recepción de cookies y para impedir
         su instalación en su equipo. Se prohíbe explícitamente la creación de
         cualquier tipo de browser o border environment sobre las páginas de el
         Sitio Web. NUEVA MUTUAL DE SERVICIOS NU.MU.SE se reserva el derecho de
         inhabilitar hipervínculos o estructuras no autorizados. NUEVA MUTUAL DE
         SERVICIOS NU.MU.SE utiliza técnicas de seguridad de la información
         aceptadas en la industria, tales como firewalls, procedimientos de
         control de acceso y mecanismos criptográficos, todo ello, con el objeto
         de evitar el acceso indebido o no autorizado a los datos. Para lograr
         esos fines, el usuario acepta que los servidores del servicio obtengan
         datos para efectos de la correspondiente autenticación de los controles
         de acceso. Para obtener más información sobre el tipo de información
         recolectada, acceda a nuestras Políticas de Privacidad. Dicha
         información tendrá sólo fines de seguridad de la información, por lo
         que no será compartida con terceros, salvo que sea exigido por la ley o
         requerido por autoridad judicial. En el caso que se requiera
         información sensible del usuario, se utilizará el protocolo SSL
         garantizando la protección de estos datos y cumplimiento de las
         normativas vigentes de acuerdo con lo establecido en la Política de
         Privacidad. El Usuario deberá siempre mantener sus datos de acceso de
         manera secreta y confidencial, y deberá adoptar todas las medidas
         posibles para proteger la confidencialidad y secreto de estas.
         Cualquier uso ilegítimo o no autorizado de los datos de acceso será
         exclusivamente responsabilidad del Usuario.
      </p>
      <p class="mb-5">
         5. Propiedad Intelectual<br />
         NUEVA MUTUAL DE SERVICIOS NU.MU.SE es propietario o está autorizada
         para el uso de todos los contenidos expuestos en el sitio (logos,
         diseños, fotos, textos, etc.), estando protegidos por los derechos de
         Propiedad Intelectual Argentina (Ley 11.723 y sus modificaciones),
         inscriptos en el Instituto Nacional de Propiedad Intelectual, de
         acuerdo con lo establecido por la normativa vigente. NUEVA MUTUAL DE
         SERVICIOS NU.MU.SE se reserva el ejercicio de sus derechos de uso o
         propiedad de los contenidos, quedando expresamente prohibida toda
         reproducción, utilización, adaptación, referencia externa o
         comercialización sin nuestra aprobación por escrito. Usted conservará
         los derechos de autor y cualquier otro derecho que ya posea del
         Contenido que envíe, publique o muestre a través del Sitio Web. Al
         enviar, publicar o mostrar contenido, estará concediendo a NUEVA MUTUAL
         DE SERVICIOS NU.MU.SE una licencia temporal, internacional, revocable,
         no exclusiva y que no está sujeta a derechos de autor para reproducir,
         adaptar, modificar, traducir, publicar, representar y mostrar
         públicamente, así como para distribuir cualquier Contenido que envíe,
         publique o muestre en el Sitio. Esta licencia se otorga con el único
         propósito de permitir a gestionar, administrar, distribuir, comunicar o
         tramitar los Servicios del Sitio Web.
      </p>
      <p class="mb-5">
         6. Sitios de Terceros <br />
         Los usuarios que quieran establecer vínculos de acceso a el Sitio Web
         desde sitios externos deberán respetar las siguientes condiciones: Se
         podrán reproducir las páginas de el Sitio Web mediante un hipervínculo
         que, únicamente, permita el acceso a la página principal del Sitio Web,
         salvo previa y expresa autorización por escrito de NUEVA MUTUAL DE
         SERVICIOS NU.MU.SE. En ningún caso se podrá dar a entender que el Sitio
         Web autoriza el hipervínculo o que ha supervisado o asumido de
         cualquier forma los servicios o contenidos ofrecidos desde el sitio que
         se produce el hipervínculo. Se prohíbe explícitamente la creación de
         cualquier tipo de browser y/o border environment sobre las páginas de
         el Sitio Web. Se prohíbe incluir contenidos contrarios a los derechos
         de terceros, ni contrarios al orden público, la moral y buenas
         costumbres, ni contenidos o informaciones ilícitas, en la página web
         desde la que se establece el hipervínculo. La existencia de un
         hipervínculo entre una página web y el Sitio Web no implica la
         existencia de relación alguna entre el Sitio Web y el propietario de
         esa página ni la aceptación y aprobación de sus servicios y contenidos.
         NUEVA MUTUAL DE SERVICIOS NU.MU.SE se reserva el derecho de inhabilitar
         hipervínculos o estructuras no autorizados.
      </p>
      <p class="mb-5">
         7. Limitación de Responsabilidad y Garantías <br />
         Por el presente acuerdo, NUEVA MUTUAL DE SERVICIOS NU.MU.SE renuncia a
         toda responsabilidad hacia usted o hacia cualquier tercero, del
         incumplimiento de cualquiera de sus obligaciones en virtud de las
         Condiciones, así como de las consecuencias, incluido cualquier pérdida
         o daño. El usuario será el único y exclusivo responsable de la mala o
         inadecuada utilización de los servicios o contenidos que accede o
         utiliza, aceptando que NUEVA MUTUAL DE SERVICIOS NU.MU.SE no tendrá
         ningún tipo de responsabilidad al respecto. Asimismo, NUEVA MUTUAL DE
         SERVICIOS NU.MU.SE no asume ninguna responsabilidad por la información
         contenida en sitios de terceros a las que se pueda acceder por enlaces
         o buscadores contenidos en el sitio web. La función de los enlaces que
         aparecen en esta página sólo tiene finalidad informativa y, en ningún
         caso suponen que nosotros sugerimos, invitemos, recomendamos o
         compartamos sus contenidos u opiniones. NUEVA MUTUAL DE SERVICIOS
         NU.MU.SE no asume responsabilidad alguna por garantías, explícitas o
         implícitas, relacionadas con el Servicio y sus contenidos, el que se
         proporciona "tal cual", y que se brinda sin garantía y sin
         responsabilidad alguna respecto a su calidad, aptitud para el uso,
         integridad o precisión. NUEVA MUTUAL DE SERVICIOS NU.MU.SE se
         compromete a realizar los esfuerzos en la medida de sus posibilidades
         para suministrar los Servicios con la mayor calidad, fiabilidad y
         seguridad posible. Sin embargo, no garantizamos que el Servicio sea
         ininterrumpido, puntual o que esté libre de errores, que puedan
         corregirse los defectos o que los servicios que se encuentren aquí
         estén libres de fallos. NUEVA MUTUAL DE SERVICIOS NU.MU.SE se reserva
         el derecho a suspender, interrumpir, modificar, aumentar o eliminar el
         Servicio con total discreción y con efectos inmediatos, sin la
         obligación de avisar previamente y sin asumir responsabilidad alguna
         por cualquier tipo de pérdida que se ocasionare como consecuencia de
         cualquier decisión tomada por NUEVA MUTUAL DE SERVICIOS NU.MU.SE.
      </p>
      <p class="mb-5">
         8. Generales <br />
         NUEVA MUTUAL DE SERVICIOS NU.MU.SE y usted aceptan someterse a la
         Justicia Nacional Ordinaria en lo Comercial de la Ciudad de Rafaela,
         Provincia de Santa Fe, República Argentina para resolver cualquier
         asunto legal derivado de estas Condiciones. Usted reconoce y acepta que
         cada uno de los miembros y/o socios fundadores y/o departamentos
         subsidiarios y/o filiales de NUEVA MUTUAL DE SERVICIOS NU.MU.SE
         constituyen beneficiarios terceros de las Condiciones y que dichos
         miembros están autorizados a aplicar directamente las disposiciones de
         las Condiciones que les concedan los beneficios o derechos pertinentes,
         así como a basarse en ellas. Excepto lo anteriormente estipulado, no
         habrá ninguna otra persona o empresa beneficiaria de las presentes
         Condiciones. Si alguna cláusula de las Condiciones fuera considerada
         nula, anulable o inoponible, esto último no afectará ninguna otra
         cláusula del presente documento. Consecuentemente, las Condiciones
         deberán ser modificadas en el grado necesario para dar ejecución a las
         demás previsiones del presente. Las presentes Condiciones constituyen
         el acuerdo legal completo entre NUEVA MUTUAL DE SERVICIOS NU.MU.SE y
         usted, rigen el uso que usted haga del Sitio web, sin incluir los
         servicios que NUEVA MUTUAL DE SERVICIOS NU.MU.SE le ofrezca en virtud
         de un acuerdo por escrito independiente, y sustituyan cualquier acuerdo
         previo.
      </p>
   </Dialog>
</template>
<script setup>
import { ref } from 'vue';

const visible = ref(false);

const openLink = () => {
   window.open('http://qr.afip.gob.ar/?qr=Covt5BT3CuwEFuU7IipfUA,,', '_blank');
};
</script>
<style scoped>
p {
   font-size: 0.7rem;
   font-weight: 600;
}

.footer {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 100%;
}

.info {
   display: flex;
   justify-content: space-around;
   width: 90%;
}

i {
   font-size: 0.9rem;
   margin-right: 4px;
   color: rgb(255, 255, 255);
}
.dataweb {
   width: 100%;
   display: flex;
   justify-content: center;
}

span {
   margin-left: 8px;
}
@media (max-width: 1024px) {
   p {
      font-size: 0.6rem;
   }

   .info {
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
   }

   .info > * {
      width: 100%;
      text-align: start;
   }

   i {
      font-size: 0.8rem;
   }

   span {
      margin-left: 0;
      margin-top: 4px;
   }
}
</style>
