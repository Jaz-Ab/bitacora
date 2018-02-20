$(document).ready(begin);

function begin() {
  let writeText = () => {
    $('#binnacle').append(`
      <div>
        <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s6">
                <i class="material-icons prefix">mode_edit</i>
                <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                <label for="icon_prefix2">First Name</label>
              </div>
            </div>
          </form>
        </div>
        <a id="btn-save" class="waves-effect waves-light btn">button</a>
      </div>
    `);
    let text;
    let write = () => {
      if ($('#icon_prefix2').val()) {
        text = $('#icon_prefix2').val();
      }
    };
    let save = () => {
      $('#binnacle').append(`
        <div class="row">
          <div class="col s12 m5">
            <div class="card-panel teal">
              <span class="white-text">${text}
              </span>
            </div>
          </div>
        </div>
      `);
    };
    $('#btn-save').click(save);
    $('#icon_prefix2').keyup(write);
  };
  $('#message').click(writeText);
}
