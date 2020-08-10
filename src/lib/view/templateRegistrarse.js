
export const registrarse = () => {
  const registrar = `
  <div class="contenedorInicio" id="inicio">
    <img src="img/logotipo1.png" class="logotipo" alt="logotipo">
    <p class="tituloRegi">Registrarse</p>
   <!-- <main>-->
        <form id="form-registrarse" class="formato_registrarse">
      <!--  <input class="nombre" id="nombre" type="text" placeholder="Nombre">
        <input class="apellido" id="apellido" type="text" placeholder="Apellido"> -->
        <input class="email" id="email" type="text" placeholder="Correo eléctronico" required>
        <input class="password" id="password" type="password" placeholder="Contraseña" required>

     <!--   <select id="mbti" class="mbti">
            <option value="">MBTI</option>
            <option value="ESTJ">ESTJ </option>
            <option value="ESTP">ESTP </option>
            <option value="ESFJ">ESFJ </option>
            <option value="ESFP">ESFP </option>
            <option value="ISTJ">ISTJ </option>
            <option value="ISTP">ISTP </option>
            <option value="ISFJ">ISFJ </option>
            <option value="ISFP">ISFP </option>
            <option value="ENTJ">ENTJ </option>
            <option value="ENTP">ENTP </option>
            <option value="ENFJ">ENFJ </option>
            <option value="ENFP">ENFP </option>
            <option value="INTJ">INTJ </option>
            <option value="INTP">INTP </option>
            <option value="INFJ">INFJ </option>
            <option value="INFP">INFP </option>
        </select>
    -->
       <!-- <div class="btns">-->
        <!--<button type="submit" class="btn-registrarse" id="btn-registrarse">Registrarse</button>-->
        <!--</div>-->

        <!--<div class="btons">
            <button <a  href="#" onclick="location.href = document.referrer; return false;" class="atras">Atrás</a>
            <button type="submit" class="btn-registro" id="btn-registro"> Registrarse</button>
        </div>
        -->

      <div class="btons">
        <ul class="ejemplo">
        <li>
            <a class="atras" href="#/Atras" onclick="location.href = document.referrer; return false;">Atrás</a>
        </li>
        <li>
            <a class="btn-registro" href="#/Registrar">Registrarse</a>
        </li>
      </ul> 
      <div>


        </form>
   <!-- </main>-->
   </div>
    `;

return registrar;

};

