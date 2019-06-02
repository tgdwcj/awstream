initSidebarItems({"fn":[["aggregate_accuracy","This function takes an input file (accuracy measurement by frame) and processes it generate an output file (accuracy by time). The granuarilty of the generated file is configurable with duration (second)."],["aggregate_bandwidth","This function takes an input file (bandwidth measurement by frame) and processes it generate an output file (bandwidth by time). The granuarilty of the generated file has a configurable resolution (`duration_in_sec`)."],["all_configurations","Returns a list of all configurations VideoConfig."],["extract_proc_time","This function takes an input file (accuracy measurement by frame) and extracts the processing time. If the frame is missing, it returns `f64::NAN`."],["f1","Calculates f1 from precision and recallacc"],["get_bandwidth_accuracy_for_config","Given a configuration, this function merges bandwidth measure and accuracy measure, returns a vector of (bandwidth, accuracy)"],["get_frame_stats","Generate per-frame stat with configuration."],["precision","Calculates precision from true positive and false positive."],["recall","Calculates recall from true positive and false negative"],["summarize_profile","Summarize profile from `dir` to `outdir`. Will produce `profile.csv` and `pareto.csv`."]],"struct":[["Configuration","A generic configuration struct that contains parameter, bandwidth and accuracy."],["FrameStat","Per frame statistics"],["Pareto","The Pareto-optimal set."],["Profile","A profile is a list of all configuration."],["Stat","Statistics"],["VideoConfig","Video configuration consists of width, skip and quantization"]]});