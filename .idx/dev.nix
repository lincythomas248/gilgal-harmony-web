{ pkgs, ... }: {
  channel = "stable-24.05";

  idx = {
    previews = {
      enable = true;
      previews = {
        web = {
          # IMPORTANT: use $PORT so Studio can route the Preview correctly
          command = [
            "npm" "run" "dev" "--"
            "--host" "0.0.0.0"
            "--port" "$PORT"
          ];
          manager = "web";

          # If your app is in a subfolder, uncomment and set:
          # cwd = "new_repo";
        };
      };
    };
  };
}
